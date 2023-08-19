import React, { useState } from 'react'
import { color } from '../MyCodes/colors'
import { Configuration, OpenAIApi } from "openai";

const api = process.env.CHATGPT_API;
const configuration = new Configuration({
    apiKey: api
});

function Home() {
    const [yourResponse, setYourResponse] = useState([])
    const [aiResponse, setAiResponse] = useState([])
    const [currentChatInput, setCurrentChatInput] = useState('')
    console.log(yourResponse)



    const captureText = (event) => {
        if (event.key == 'Enter') {
            const getchat = async () => {
                const response = await fetch("https://hardikchat.netlify.app/.netlify/functions/ChatAI", {
                    method: 'POST',
                    body: JSON.stringify({
                        message: { role: "user", content: "Hello world" }
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                });
                const Chat = await response.json();
                console.log(Chat)
            }
            getchat()
            setYourResponse((old) => {
                return (
                    [...old, currentChatInput]
                )
            });
            setCurrentChatInput('');
            document.querySelector('.chatInput').value = ''
        }
    }

    const onChange = ({ target }) => {
        setCurrentChatInput(target.value)

    }

    return (
        <div className={`w-full h-[52rem] center flex-col border bg-[${color[1]}]`}>
            <div className='h-[40rem] w-[80%] m-auto bg-gray-600 p-4'>
                {
                    yourResponse.map(respons => {
                        return (
                            <div className='w-fit h-8 bg-blue-500 rounded-full p-2 center shadow-sm shadow-black mb-4'>
                                <h1 className='text-white'>{respons}</h1>

                            </div>
                        )
                    })
                }
            </div>

            <input onChange={onChange} onKeyDown={captureText} type="text" className='mb-4 w-[55%] h-16 px-2 chatInput' />


        </div >
    )
}

export default Home