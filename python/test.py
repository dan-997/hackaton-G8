import openai

openai.api_key = "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"


messages = [{"role": "system", "content": "You are a financial expert"}]
print("Your personal assistant is here to help you")

def CustomChatGPT(USER_INPUT):
    messages.append({"role": "user", "content": USER_INPUT})
    response = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages = messages
    )
    ChatGPT_reply = response["choices"][0]["message"]["content"]
    messages.append({"role": "assistant", "content": ChatGPT_reply})
    return ChatGPT_reply

while input != "quit()":
    USER_INPUT = input("Any financial assistance needed?")
    
    if "no" in USER_INPUT.lower() :
        input = quit()
    else:
        print(CustomChatGPT(USER_INPUT))
        
    
    
