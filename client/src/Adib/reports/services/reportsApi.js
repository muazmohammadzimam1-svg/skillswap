import axios from "axios";
import { API_BASE } from "../../../services/api";

const REPORTS_API_BASE = `${API_BASE}/reports`;

export const reportsApi = {
  submitReport: async (data) => {
    const res = await axios.post(REPORTS_API_BASE, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  },

  getMyReports: async () => {
    const res = await axios.get(`${REPORTS_API_BASE}/my-reports`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  },

  getReportsAboutUser: async (userId) => {
    const res = await axios.get(`${REPORTS_API_BASE}/about/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  },

  getAllReports: async () => {
    const res = await axios.get(REPORTS_API_BASE, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  },

  updateReport: async (id, data) => {
    const res = await axios.put(`${REPORTS_API_BASE}/${id}`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  },

  deleteReport: async (id) => {
    const res = await axios.delete(`${REPORTS_API_BASE}/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  },
};
