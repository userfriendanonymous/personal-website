import { useCallback, useRef, useState } from "react"
import Message from "./message"
import { Section, SectionContent, Button, Title, Input, Textarea, Image } from "@/shared"
import { AnimatePresence } from "framer-motion"

export default function Contact(){
    const [warning, setWarning] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const nameRef = useRef<HTMLInputElement>(null!)
    const emailRef = useRef<HTMLInputElement>(null!)
    const messageRef = useRef<HTMLTextAreaElement>(null!)

    const submit = useCallback(async () => {
        if (messageRef.current.value.length < 2){
            setWarning('Message is too short')
            return
        }
        
        const formData = new FormData()
        formData.append('access_key', '6eef5d6c-bb29-47b2-b718-6f9cdfe98e8f')
        formData.append('name', nameRef.current.value)
        formData.append('email', emailRef.current.value)
        formData.append('message', messageRef.current.value)

        setIsLoading(true)
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })
        setIsLoading(false)

        if (!response.ok){
            setWarning('Failed to submit form. Try again.')
        } else {
            setIsSent(true)
            setWarning('')
            messageRef.current.value = ''
        }
    }, [])

    return (
        <Section id='contact'>
            <SectionContent className='py-[70px]'>
                <Title>{'📱Contact Me?'}</Title>
                <div className='mt-[30px] max-w-[500px] mx-auto'>
                    <Input ref={nameRef} placeholder="Your name/acronym?" className='mb-[30px]'/>
                    <Input ref={emailRef} placeholder="Your email? (Optional)" className='mb-[30px]'/>
                    <Textarea ref={messageRef} placeholder="Your message..."></Textarea>
                    <AnimatePresence>{
                        warning ?
                        <Message>{warning}</Message>
                        : null
                    }</AnimatePresence>
                    {
                        isSent ?
                        <Message variant='success'>Successfully sent your message. Thanks!</Message>
                        :
                        <Button className='mx-auto mt-[30px]' onClick={submit}>{
                            isLoading ? 
                                <div>Sending...</div>
                            : 'Submit'
                        }</Button>
                    }
                </div>
            </SectionContent>
        </Section>
    )
}