
import { supabase } from '../supabaseClient';

export async function updateBurnStreak(userId) {
  const today = new Date().toISOString().split('T')[0];

  const { data: burnsToday } = await supabase
    .from('events')
    .select('*')
    .eq('user_id', userId)
    .eq('type', 'burn')
    .gte('created_at', today);

  if (!burnsToday || burnsToday.length === 0) {
    await supabase.from('events').insert({
      user_id: userId,
      type: 'burn',
      detail: { day: today }
    });
  }
}
