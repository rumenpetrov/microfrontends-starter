import {
  Link,
  Outlet,
} from 'react-router-dom';

const Root = () => {
  const style = { display: 'flex', gap: '8px', justifyContent: 'center', padding: '8px 0' };

  return (
    <div>
      <header>
        <nav style={style}>
          <strong>Server-side links:</strong>

          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/about">About</a>
          </div>
          <div>
            <a href="/app-react">app-react</a>
          </div>
        </nav>

        <nav style={style}>
          <strong>Client-side links:</strong>

          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/app-react">app-react</Link>
          </div>
        </nav>
      </header>

      <Outlet />
    </div>
  )
}

export default Root;