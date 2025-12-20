'use server';

import {generateText, Message} from 'ai';
import {cookies} from 'next/headers';

import {
  deleteMessagesByChatIdAfterTimestamp,
  getMessageById,
  updateChatVisiblityById,
} from '@/lib/db/queries';
import {VisibilityType} from '@/components/visibility-selector';
import {myProvider} from '@/lib/ai/providers';

export async function saveChatModelAsCookie(model: string) {
  const cookieStore = await cookies();
  cookieStore.set('chat-model', model);
}

export async function generateTitleFromUserMessage({
  message,
}: {
  message: Message;
}) {
  try {
    const {text: title} = await generateText({
      model: myProvider.languageModel('title-model'),
      system: `\n
    - you will generate a short title based on the first message a user begins a conversation with
    - ensure it is not more than 80 characters long
    - the title should be a summary of the user's message
    - do not use quotes or colons`,
      prompt: JSON.stringify(message),
    });

    return title;
  } catch (error) {
    // Fallback to a default title if generation fails
    const firstPart = message.parts?.[0];
    if (firstPart && typeof firstPart === 'object' && 'text' in firstPart) {
      const text = firstPart.text as string;
      return text.slice(0, 80) || 'New Chat';
    }
    return 'New Chat';
  }
}

export async function deleteTrailingMessages({id}: {id: string}) {
  const [message] = await getMessageById({id});

  await deleteMessagesByChatIdAfterTimestamp({
    chatId: message.chatId,
    timestamp: message.createdAt,
  });
}

export async function updateChatVisibility({
  chatId,
  visibility,
}: {
  chatId: string;
  visibility: VisibilityType;
}) {
  await updateChatVisiblityById({chatId, visibility});
}
