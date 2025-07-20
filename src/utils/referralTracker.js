
import { supabase } from '../supabaseClient';

export async function recordReferral(referrerId, newUserId) {
  await supabase.from('events').insert({
    user_id: newUserId,
    type: 'referral',
    detail: { referrer: referrerId }
  });

  await supabase.from('events').insert({
    user_id: referrerId,
    type: 'referral_bonus',
    detail: { referred: newUserId }
  });
}
