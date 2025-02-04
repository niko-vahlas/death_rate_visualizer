import { supabase } from '../../lib/supabase';
import { Provider } from '@/components/ui/provider';
import carsTable from './components/carsTable';
import { Vehicle } from '@/interfaces/vehicleModel';

export default async function Cars() {
  // return <h1>Death rate</h1>;
  const { data: cars } = await supabase.from('cars').select();
  return carsTable(cars!);
}
