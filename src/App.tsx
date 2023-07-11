import { ErrorBoundary } from 'react-error-boundary';

import { Home } from './home';
import { ErrorView } from './shared';

import './App.css';

function App() {
	return (
		<>
			<ErrorBoundary FallbackComponent={ErrorView}>
				<Home />
			</ErrorBoundary>
		</>
	);
}

export default App;
