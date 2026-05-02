import axios from "axios";
import { API_BASE } from "../../../services/api";

const LEADERBOARD_API_BASE = `${API_BASE}/leaderboard`;

export const leaderboardApi = {
  getLeaderboard: async () => {
    const res = await axios.get(`${LEADERBOARD_API_BASE}/leaderboard`);
    return res.data;
  },

  getUserRank: async (userId) => {
    const res = await axios.get(`${LEADERBOARD_API_BASE}/user-rank/${userId}`);
    return res.data;
  },

  getAllBadges: async () => {
    const res = await axios.get(`${LEADERBOARD_API_BASE}/badges`);
    return res.data;
  },

  getUserBadges: async (userId) => {
    const res = await axios.get(`${LEADERBOARD_API_BASE}/badges/${userId}`);
    return res.data;
  },

  getBadgeWinners: async () => {
    const res = await axios.get(`${LEADERBOARD_API_BASE}/badge-winners`);
    return res.data;
  },

  awardBadge: async (userId, badgeId) => {
    const res = await axios.post(
      `${LEADERBOARD_API_BASE}/award-badge`,
      { userId, badgeId },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    );
    return res.data;
  },

  autoAwardBadges: async () => {
    const res = await axios.post(
      `${LEADERBOARD_API_BASE}/auto-award`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    );
    return res.data;
  },
};
