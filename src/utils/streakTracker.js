
import { supabase } from '../supabaseClient';

export async function updateStreak(userId) {
  const today = new Date().toISOString().split('T')[0];

  const { data: events } = await supabase
    .from('events')
    .select('created_at')
    .eq('user_id', userId)
    .eq('type', 'login_streak')
    .gte('created_at', today);

  if (!events || events.length === 0) {
    await supabase.from('events').insert({
      user_id: userId,
      type: 'login_streak',
      detail: { day: today }
    });
  }
}
