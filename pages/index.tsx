import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Layout from '@/components/Layout'

const HomePage = () => {
  const { data: session } = useSession()

  // const { data: session, status } = useSession()
  // const loading = status === 'loading'

  if (session) {
    console.log('%c session ', 'background: blue; color: white', session)
  }
  return (
    <Layout title="Document" description="Document description">
      <main>
        <section>
          <h1>Welcome to QR Contact.us</h1>
          <h3>Section</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            obcaecati quam commodi perspiciatis aut sequi, corporis numquam
            reiciendis necessitatibus eligendi deserunt voluptatem iste ea
            delectus magnam. Excepturi, esse suscipit facere dolore deleniti
            temporibus odit inventore, beatae possimus quae placeat quasi
          </p>
          <Image src="/images/ibm.jpg" width={600} height={400} alt="ENIAC" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            obcaecati quam commodi perspiciatis aut sequi, corporis numquam
            reiciendis necessitatibus eligendi deserunt voluptatem iste ea
            delectus magnam. Excepturi, esse suscipit facere dolore deleniti
            temporibus odit inventore, beatae possimus quae placeat quasi
          </p>
        </section>
      </main>
    </Layout>
  )
}

export default HomePage
