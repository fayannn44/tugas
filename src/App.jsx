import Layout from "./layout/layout"; 
import Button from "./button/AlertButton.jsx";
import StudentTable from "./submit/SubmitSiswa.jsx"; 
import Note from "./note/noteApp.jsx"; 
import StudentApp from "./student/StudentApp.jsx";

function App() {
  return (
    <Layout>
      <div >
        <h1>Welcome to the App</h1>
        <Button text="Click me!" message="dahhhhhhhhhhhhhhhhhhhh" />
        
      </div>
      <StudentTable />
      <Note />
      <StudentApp />
    </Layout>
  );
}
export default App;