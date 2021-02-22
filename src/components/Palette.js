import StateProvider from './Provider'
import FormColor from './FormColor'

export default function Palette() {
    return <StateProvider>
        <FormColor />
    </StateProvider>
}