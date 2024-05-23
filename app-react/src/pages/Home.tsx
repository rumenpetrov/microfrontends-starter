import React from 'react'

const Home = () => {
  const ref = React.useRef<HTMLDialogElement>(null)

  const handleClick = () => {
    if (ref.current) {
      ref.current.showModal();
    }
  }

  return (
    <div>
      <div style={{ marginBottom: '50px'}}>
        <h1>Home</h1>

        <h3>Remote React v{React.version}</h3>

        <div>
          <button type="button" onClick={handleClick}>Say hello</button>

          <dialog ref={ref} style={{ borderColor: 'lime', width: '60vw' }}>
            <p>Greetings from within app-react!</p>
            <form method="dialog">
              <button>OK</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  )
}

export default Home
