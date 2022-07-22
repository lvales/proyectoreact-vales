
const Contactanos = () => {
   return (
      <>
         <div class="flex mt-10 mb-28 items-center justify-start bg-white">
            <div class="mx-auto w-full max-w-lg">
               <h1 class="text-4xl font-medium">Contactanos</h1>
               <p class="mt-3">Envíanos un correo electrónico a help@sunride.com o envíanos un mensaje aquí:</p>

               <form action="/" class="mt-10">

                  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                  <div class="grid gap-6 sm:grid-cols-2">
                     <div class="relative z-0">
                        <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                        <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu nombre</label>
                     </div>
                     <div class="relative z-0">
                        <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                        <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu email</label>
                     </div>
                     <div class="relative z-0 col-span-2">
                        <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                        <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu mensaje</label>
                     </div>
                  </div>
                  <button type="submit" class="mt-5 bg-blue-300 text-white text-xl px-3 py-2 rounded-lg hover:bg-blue-500">Envar mensaje</button>
               </form>
            </div>
         </div>
      </>
   )
}

export default Contactanos