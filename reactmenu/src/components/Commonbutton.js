
function Common({ text, background }){
  return <button className ="grid-item" style={{backgroundColor: background }}>{text}</button>;
};

export { Common };