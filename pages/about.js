import Link from "next/link"
import Layout from "../components/Layout"
export default function About() {
    return (
        <Layout>
            <h2>
                Write your words, your promise, something you want to say but not out load to the world.
                Prove them that you have said that before by keeping your unique sha256 sum. 

                It is one way hash, so it should be an unique value for each of your words. 

            </h2>
            <p>
                The SHA (Secure Hash Algorithm) is one of a number of cryptographic hash functions. A cryptographic hash is like a signature for a data set. 
                If you would like to compare two sets of raw data (source of the file, text or similar) it is always better to hash it and compare SHA256 values. 
                It is like the fingerprints of the data. Even if only one symbol is changed the algorithm will produce different hash value. 
                SHA256 algorithm generates an almost-unique, fixed size 256-bit (32-byte) hash. Hash is so called a one way function. 
                This makes it suitable for checking integrity of your data, challenge hash authentication, anti-tamper, digital signatures, blockchain. 
                With the newest hardware (CPU and GPU) improvements it is become possible to decrypt SHA256 algorithm back. 
                So it is no longer recommended to use it for password protection or other similar use cases. 
                Some years ago you would protect your passwords from hackers by storing SHA256 encrypted password in the your data base. 
                This is no longer a case. 
                SHA256 algorithm can be still used for making sure you acquired the same data as the original one. 
                For example if you download something you can easily check if data has not changed due to network errors or malware injection. 
                You can compare hashes of your file and original one which is usually provided in the website you are getting data or the file from.

                SHA-256 is one of the successor hash functions to SHA-1,and is one of the strongest hash functions available.

                Using this online tool you can easily generate SHA256 hashes
            </p>
        </Layout>
    )
}