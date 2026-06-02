/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Treatment {
  id: string;
  title: string;
  nickname: string; // The soccer/Cup analogy
  category: string;
  description: string;
  benefits: string[];
  duration: string;
  recovery: string;
  iconName: string; // to resolve lucide icons
  badge: string;
  detailsCopy: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  location: string;
  verified: boolean;
}

export interface BookingPayload {
  name: string;
  phone: string;
  email: string;
  selectedTreatments: string[];
  preferredDate: string;
  preferredPeriod: 'manha' | 'tarde' | 'vespera_vip';
  message?: string;
}
