import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  organization: text("organization"),
  service: text("service").notNull(),
  message: text("message").notNull(),
  urgent: boolean("urgent").default(false),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  submittedAt: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  service: z.string().min(1, "Please select a service"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contactSubmissions.$inferSelect;

export const users = pgTable("users", {
  id: varchar("id", { length: 36 }).primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: 'institute' | 'creative';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  tags: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  type: 'per-task' | 'monthly' | 'annual';
  features: string[];
  highlight?: boolean;
  ctaText: string;
}

export interface InsightQuote {
  text: string;
  category: 'business' | 'creative' | 'tech';
}

export interface TimeGreeting {
  period: 'morning' | 'afternoon' | 'evening' | 'late-night';
  greeting: string;
  message: string;
}
