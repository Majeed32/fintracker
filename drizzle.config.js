/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:0OSM7YHQkica@ep-cold-frog-a5zz08m9.us-east-2.aws.neon.tech/fintracker?sslmode=require',
    }
  };