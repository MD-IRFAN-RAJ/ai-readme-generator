
import './App.css'
import GeneratorForm from './components/GeneratorForm.jsx'
function App() {


  return (
    <>
      <div
        className="App"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #000033, #1a1a40)', // navy blue background
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 20px',
          fontFamily: 'Segoe UI, sans-serif',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '900px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // semi-transparent card
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
          }}
        >
          <GeneratorForm />
        </div>
      </div>
    </>
  )
}

export default App
