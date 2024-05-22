import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://pkftrqpklwvvmeyqepmq.supabase.co';

const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrZnRycXBrbHd2dm1leXFlcG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0MDQyNjAsImV4cCI6MjAzMTk4MDI2MH0.oEt7IeuXUmGvucBoD0lMTN4b1QJJmo-UJHec8knGO50';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
