import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

//page table ('nome da tabela',{campos / id:uuid... prestar atenção na importação})
export const rooms = pgTable("rooms", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  description: text(),
  createdAt: timestamp().defaultNow().notNull(),
});
