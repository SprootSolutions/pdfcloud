import { FormatFile } from './FormatFile/FormatFile';
import { Spinner } from './Spinner';

export const Files = () => {
  return (
    <>
      <FormatFile name={'PDF'} />
      <Spinner />
      <FormatFile name={'PDF'} />
    </>
  );
};
