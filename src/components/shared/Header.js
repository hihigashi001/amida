import { useState } from "react"
import Link from "next/link"

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <nav class="flex items-center justify-between flex-wrap bg-primary p-4">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <svg className="h-8 w-8 mr-2 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clipRule="evenodd" /></svg>
        <Link href="/"><a class="font-semibold text-xl tracking-tight">あみだくじサイト</a></Link>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-primary-lighter border-primary-light hover:text-white hover:border-white" onClick={() => setShow(!show)}>
          <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      {
        (show) ?
          <div class="w-full block flex-grow lg:items-center lg:w-auto lg:hidden">
            <div class="text-sm lg:flex-grow">
              <Link href="/usage"><a class="block mt-4 lg:inline-block lg:mt-0 text-primary-lighter hover:text-white mr-4">
                このサイトの使い方
              </a></Link>
              <Link href="/multiple"><a class="block mt-4 lg:inline-block lg:mt-0 text-primary-lighter hover:text-white mr-4">
                みんなであみだくじ
              </a></Link>
              <Link href="/myself"><a class="block mt-4 lg:inline-block lg:mt-0 text-primary-lighter hover:text-white">
                一人であみだくじ
               </a></Link>
            </div>
          </div>
          :
          null
      }
    </nav >
  );
};

export default Header;