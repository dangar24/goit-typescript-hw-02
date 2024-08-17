import { Formik, Form, Field } from "formik";
import toast from 'react-hot-toast';
import css from './SearchBar.module.css'

interface SearchBarProps {
    onSearch: (value:string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {

    
    return <header>
        <Formik
            initialValues={{ search: '' }}
            onSubmit={(values, actions) => {
                if (values.search==='') {
                    toast.error('Field is empty')
                }
                onSearch(values.search);
                actions.resetForm();
            }}
        >
            <Form className={css.form}>
                <Field
                    name='search'
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                <button type="submit" >Search</button>
            </Form>
        </Formik>
</header>
}

export default SearchBar;