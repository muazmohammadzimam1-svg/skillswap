import axios from "axios";
import { API_BASE } from "../../../services/api";

const REFERRAL_API_BASE = `${API_BASE}/referral`;

export const referralApi = {
  getReferralCode: async () => {
    const res = await axios.get(`${REFERRAL_API_BASE}/my-code`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  },

  getReferralStats: async () => {
    const res = await axios.get(`${REFERRAL_API_BASE}/stats`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  },

  getReferrals: async () => {
    const res = await axios.get(REFERRAL_API_BASE, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  },

  useReferralCode: async (referralCode, userId) => {
    const res = await axios.post(`${REFERRAL_API_BASE}/use/${referralCode}`, { userId });
    return res.data;
  },

  completeReferral: async (id) => {
    const res = await axios.put(
      `${REFERRAL_API_BASE}/${id}/complete`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    );
    return res.data;
  },
};
