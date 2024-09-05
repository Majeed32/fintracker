import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema.jsx'
const sql = neon('postgresql://neondb_owner:0OSM7YHQkica@ep-cold-frog-a5zz08m9.us-east-2.aws.neon.tech/fintracker?sslmode=require');
export const db = drizzle(sql, {schema});