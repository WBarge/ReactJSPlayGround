import React from 'react'

const Content = () => {
  const  handleNameChange=()=>{
    const names = ['Test','Tester','Bill'];
    const subScript = Math.floor(Math.random()*3);
    return names[subScript];
  };
  return (
    <main>
        Hello {handleNameChange()}!
    </main>
  );
}

export default Content