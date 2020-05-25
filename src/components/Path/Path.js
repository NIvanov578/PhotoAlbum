import { useParams } from 'react-router-dom';

export default function ({ render }) {
  return render(useParams());
}
