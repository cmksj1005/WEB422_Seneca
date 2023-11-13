import { useForm } from 'react-hook-form';

export default function UserForm() {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      userName: '', // the documentation encourages default values
    },
  });

  useEffect(() => {
    // set the userName value
    setValue('userName', 'Homer Simpson');
  }, []);

  function submitForm(data) {
    console.log(`form submitted - userName: ${data.userName}`);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      User Name: <input {...register('userName')} />
      <br />
      <br />
      <button type="submit">Update User Name</button>
    </form>
  );
}
