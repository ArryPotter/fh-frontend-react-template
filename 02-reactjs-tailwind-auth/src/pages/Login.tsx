import { redirect, type ActionFunctionArgs } from 'react-router-dom';
import LoginForm from '../component/loginForm';

function LoginPage() {
  return (
    <div className="container mx-auto bg-blue-300 my-70">
      <LoginForm />
    </div>
  );
}

export async function action({
  request,
}: ActionFunctionArgs): Promise<Response | ReturnType<typeof redirect>> {
  const formData = await request.formData();
  const authData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  console.log(`authData ${JSON.stringify(authData)}`);
  const response = await fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Error('Could not authenticate user.');
  }

  return redirect('/');
}

export default LoginPage;
