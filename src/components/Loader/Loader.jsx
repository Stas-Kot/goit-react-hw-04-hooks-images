import Loader from 'react-loader-spinner';
import { LoaderDiv, LoaderDivBottom } from './Loader.styled';

export function Spinner() {
  return (
    <LoaderDiv>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={999999999}
        radius={500}
      />
    </LoaderDiv>
  );
}

export function SpinnerBottom() {
  return (
    <LoaderDivBottom>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={999999999}
        radius={500}
      />
    </LoaderDivBottom>
  );
}
