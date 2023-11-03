import Hello from '@/components/Hello';
import Clock from '@/components/Clock';

export default function Home() {
  return (
    <div>
      <Hello fName="Jason" lName="Perez" />
      <Clock locale="en-CA" />
    </div>
  );
}
