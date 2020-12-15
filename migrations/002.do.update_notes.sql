ALTER TABLE noteful_notes
    ADD COLUMN
        date_updated TIMESTAMPTZ NOT NULL DEFAULT now()