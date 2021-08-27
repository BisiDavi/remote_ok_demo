import ISimpleMDE from 'react-simplemde-v1';
import 'simplemde/dist/simplemde.min.css';

export default function Markdown (){
  const option = {};

  const onReady = (instance) => console.log(instance.value());

  const onEvents = {
    'change': function() {
      // the 'this' variable can get SimpleMDE instance
      console.log(this.value());
    }
  };

  return (
    <ISimpleMDE
      option={option}
      text={'Hello World!!!'}
      onReady={onReady}
      onEvents={onEvents}
    />
  );
}