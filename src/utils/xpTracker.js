
import { supabase } from '../supabaseClient';

export async function trackXP(type = 'generic', detail = {}) {
  await supabase.from('events').insert({
    type,
    detail,
  });
}
