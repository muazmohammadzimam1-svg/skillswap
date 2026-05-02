import axios from "axios";
import { API_BASE } from "../../../services/api";

const SESSIONS_API_BASE = `${API_BASE}/sessions`;

export const sessionsApi = {
  createSession: async (data) => {
    const res = await axios.post(SESSIONS_API_BASE, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  },

  getSessions: async () => {
    const res = await axios.get(SESSIONS_API_BASE, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  },

  startSession: async (id) => {
    const res = await axios.put(
      `${SESSIONS_API_BASE}/${id}/start`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    );
    return res.data;
  },

  endSession: async (id, endTime) => {
    const res = await axios.put(
      `${SESSIONS_API_BASE}/${id}/end`,
      { endTime },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    );
    return res.data;
  },

  confirmSession: async (id) => {
    const res = await axios.put(
      `${SESSIONS_API_BASE}/${id}/confirm`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    );
    return res.data;
  },

  cancelSession: async (id) => {
    const res = await axios.put(
      `${SESSIONS_API_BASE}/${id}/cancel`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    );
    return res.data;
  },
};
