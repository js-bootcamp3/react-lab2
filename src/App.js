import "./App.css";
import Header from './containers/Header/Header'
import TitleContainer from './containers/TitleContainer/TitleContainer';

function App() {

  const handleTitleOne = () => {
    alert('Title 1 clicked')
  }

  const handleTitleTwo = () => {
    alert('Title 2 clicked')
  }

  return (
    <div className="App">
      <Header />
      <TitleContainer 
        title={'React class component Lab2'}
        size={'small'}
        onClick={handleTitleOne}
      />

      <TitleContainer 
        title={'Title 2'}
        size={'small'}
        onClick={handleTitleTwo}
      />
    </div>
  );
}

export default App;
