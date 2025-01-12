import { createAdminTable,createOrdersTable,createUsersTable,createCommentsTable,createProductsTable } from './migrations/index.js';


const runMigrations = async () => {
  try {
    await createAdminTable();
    await createProductsTable();
    await createCommentsTable();
    await createOrdersTable();
    await createUsersTable();
    console.log("All migrations ran successfully!");
  } catch (error) {
    console.error("Migration failed:", error.message);
  }
};
