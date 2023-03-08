import { Avatar, InputGroup } from './lib';

function App() {
  return (
    <div>
      <h1>React project</h1>
      <InputGroup
        type="text"
        label="Hello world"
        placeholder="Placeholder"
        clsx={{
          input: { 'input-invalid': true },
        }}
      />
      <Avatar size="sm">RM</Avatar>
    </div>
  );
}

export default App;
