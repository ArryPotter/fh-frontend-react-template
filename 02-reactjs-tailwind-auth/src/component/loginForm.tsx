import { Form } from 'react-router-dom';

function LoginForm() {
  return (
    <Form
      method="post"
      className="flex flex-col justify-center items-center  gap-4 border p-10 rounded-lg "
    >
      <h1>Login</h1>
      <p className="flex flex-col w-1/3">
        <label className="font-inter font-medium" htmlFor="email">
          Email
        </label>
        <input type="email" id="email" name="email" required />
      </p>
      <p className="flex flex-col w-1/3">
        <label className="font-inter font-medium" htmlFor="password">
          Password
        </label>
        <input type="password" id="password" name="password" required />
      </p>
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>
    </Form>
  );
}

export default LoginForm;
