export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), // 1234567788
            date: new Date().toDateString(), // sat 23, July
            text: '1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui perspiciatis debitis distinctio minus excepturi ipsa sapiente suscipit. Minus nisi repudiandae aliquid dolore cum reprehenderit consequatur eos sit! Quia, porro?',
            picture: null
        },
        {
            id: new Date().getTime() + 1000, // 1234567788
            date: new Date().toDateString(), // sat 23, July
            text: '2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui perspiciatis debitis distinctio minus excepturi ipsa sapiente suscipit. Minus nisi repudiandae aliquid dolore cum reprehenderit consequatur eos sit! Quia, porro?',
            picture: null
        },
        {
            id: new Date().getTime() + 2000, // 1234567788
            date: new Date().toDateString(), // sat 23, July
            text: '3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui perspiciatis debitis distinctio minus excepturi ipsa sapiente suscipit. Minus nisi repudiandae aliquid dolore cum reprehenderit consequatur eos sit! Quia, porro?',
            picture: null
        }
    ]
})