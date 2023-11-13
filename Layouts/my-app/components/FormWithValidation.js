import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export default function FormWithValidation() {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: 0,
    },
  });

  useEffect(() => {
    let data = {
      firstName: 'Homer',
      lastName: 'Simpson',
      age: 42,
    };

    // set the values of each form field to match "data"
    for (const prop in data) {
      setValue(prop, data[prop]);
    }
  }, []);

  function submitForm(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      First Name: <br />
      <input {...register('firstName', { required: true, maxLength: 20 })} />
      <br />
      <br />
      Last Name: <br />
      <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
      <br />
      <br />
      Age: <br />
      <input type="number" {...register('age', { min: 18, max: 99 })} />
      <br />
      <br />
      <button type="submit">Update User</button>
    </form>
  );
}
