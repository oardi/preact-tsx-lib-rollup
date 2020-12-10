import { h } from 'preact';
import { ButtonCounter } from './lib/components';
import './style.scss';

export const App = () => {
	return (
		<div class="p-2">
			<h1>Preact TSX Component Lib</h1>
			<ButtonCounter name="Some Title" />
		</div>
	);
}
