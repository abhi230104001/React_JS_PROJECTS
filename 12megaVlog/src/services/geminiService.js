import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Predefined romantic responses for certain inputs
const romanticResponses = {
 "hi": "Hi Simran! 😊 What's on your mind?",
  "hello": "Hello there! How can I help you today?",
  "how are you": "I'm doing well, thanks for asking! How about you?",
  "your name": "I'm your personal chat assistant! Though I think you have someone special who knows your name even better 😉",
  "thank you": "You're welcome! Always happy to help."
  
};

export const generateResponse = async (prompt) => {
  try {
    // Check for predefined responses
    const lowerPrompt = prompt.toLowerCase();
    if (romanticResponses[lowerPrompt]) {
      return romanticResponses[lowerPrompt];
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    // Customize the prompt more
    const romanticPrompt = `You're a romantic chatbot speaking to Simran, a beautiful 21-year-old woman. 
    Respond to her message in a sweet, poetic way that would make her feel special. 
    Be warm, caring and sprinkle in some romantic metaphors about stars, flowers or the ocean. 
    Keep it brief (1-2 sentences max). Her message: "${prompt}"`;
    
    const result = await model.generateContent(romanticPrompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (error) {
    console.error("Error generating response:", error);
    return "Even when technology fails, your beauty shines through, Simran. 💖 Could you repeat that?";
  }
};