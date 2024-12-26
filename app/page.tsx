
export default function Home() {
  return (
    <section className='ReviewSection basicSection'>
      <div >

        <h1 className='heading text-success'>Generate Review in 5 Seconds</h1>
      </div>
      <span>
        <p>ByaparHub is a AI generation platform for easy and fast review.</p>
      </span>
      <div className='generateQrContainer'>
        <div className='inputContainer'>

          <input type="text" placeholder='Get your AI QR' />
          <button className='btn btn-success'>Generate</button>
        </div>
      </div>

    </section>
  );
}
