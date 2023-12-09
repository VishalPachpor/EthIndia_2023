import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function Navbar() {

    const handleProof = function(result) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, 3000);
            // NOTE: Example of how to decline the verification request and show an error message to the user
        });
    };
    
    const onSuccess = function(result) {
        console.log(result);
    };

    return (
        
            <>
            <nav className=' flex justify-between h-12 text-white bg-black   font-bold' >
                <span className='mx-20 my-2 flex text-white text-2xl  '><Link href={"/"}>Degram</Link></span>
                <ul className= 'px-2 py-3 flex space-x-10 mx-12 '>

        <div className='hover:text-white delay-50  text-md font-semibold font-mono'>
        
            <Link href="/explore">Explore</Link></div>
        <div className='hover:text-white delay-50  text-md font-semibold font-mono'>
        
            <Link href="/search">Search</Link></div>

            <div className='hover:text-white delay-50  text-md font-semibold font-mono'>
        
            <Link href="/post">Post</Link></div>

        <div className='hover:text-white delay-50 text-md font-semibold font-mono '>
        
            <Link href="/profile">Profile</Link></div>
              {/* <div className=' mx-2 my-2 '> */}   
              <div className='hover:text-white delay-50 text-lg font-semibold font-mono '>
        
</div>                 
        <ConnectButton/>
            </ul>
        </nav>
        {/* <hr/> */}
        </>
        
        );
        }