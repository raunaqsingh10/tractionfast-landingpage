-- Create enum type for submission status
CREATE TYPE submission_status AS ENUM ('new', 'contacted', 'completed');

-- Create contact submissions table
CREATE TABLE contact_submissions (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    company_name TEXT NOT NULL,
    startup_stage TEXT NOT NULL,
    consultation_goal TEXT NOT NULL,
    other_goal TEXT,
    product_type TEXT NOT NULL,
    other_product_type TEXT,
    message TEXT,
    status submission_status DEFAULT 'new' NOT NULL,

    -- Add constraints
    CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT full_name_length CHECK (char_length(full_name) >= 2),
    CONSTRAINT company_name_length CHECK (char_length(company_name) >= 2)
);

-- Create index on email for faster lookups
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);

-- Create index on status for filtering
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);

-- Add row level security policies
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy for inserting new submissions (anyone can insert)
CREATE POLICY "Allow public insert" ON contact_submissions
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Policy for reading submissions (only authenticated users)
CREATE POLICY "Allow authenticated read" ON contact_submissions
    FOR SELECT
    TO authenticated
    USING (true);

-- Policy for updating submissions (only authenticated users)
CREATE POLICY "Allow authenticated update" ON contact_submissions
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);