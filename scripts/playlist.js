const coursesData = [
    {
        id: 0,
        webLink: "https://www.javatpoint.com/electrical-machines-tutorial",
        englishVideo: "https://www.youtube.com/watch?v=IZA_bJiGiJc&list=PL_mruqjnuVd8LP2z0c4yBwKAGEiEW_Si9",
        hindiVideo: "https://www.youtube.com/watch?v=XrHtU713vJA&list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5",
        teluguVideo: "https://www.youtube.com/watch?v=TrgzcNku0dM&list=PLZ0Bh4GFVGxSIbS-nsbyu0Ch_yaiDaBP_&index=1",
        noteBook: "https://drive.google.com/file/d/1DyusAJtZNBJeBccOUYY9uB_7lwSF9P6F/view?usp=share_link"
    },
    {
        id: 1,
        webLink: "#",
        englishVideo: "#",
        hindiVideo: "#",
        teluguVideo: "#",
        noteBook: "https://drive.google.com/file/d/1XeK3loH_TBaKWRpERY1-3tdmcgeEnIDL/view?usp=share_link"
    },
    {
        id: 2,
        webLink: "#",
        englishVideo: "https://www.youtube.com/watch?v=Z4WN2Z9okfs&list=PLIhUrsYr8yHxfOmcGIeUThHEr9lQ3IXRS",
        hindiVideo: "https://www.youtube.com/watch?v=uPdeHfcb3t4&list=PLllIzdouGu7BsadiAskySZlhDkfzGldEG",
        teluguVideo: "https://www.youtube.com/watch?v=CXr4uTi09fc&list=PLWjHD27kAWxz6tr1lmCjijatMBaAKxqAx&index=1",
        noteBook: "https://drive.google.com/file/d/17B5YobEKSNDk6VNSEWPPXoAF3V7DhGxf/view?usp=share_link"
    },
    {
        id: 3,
        webLink: "#",
        englishVideo: "https://www.youtube.com/watch?v=WG6H2pISUzQ&list=PLIhUrsYr8yHwDUrVYmUNYkEeZgZTvoIfS",
        hindiVideo: "#",
        teluguVideo: "https://www.youtube.com/watch?v=scVAW5cCPkA&list=PLa1rpkrS5d_6brR4IdJ19TDxxbFiDv-Yr",
        noteBook: "https://drive.google.com/file/d/16aZI0q9IG3VWSyeuKgfFhkOGS0t8HT9f/view?usp=share_link"
    },
    {
        id: 4,
        webLink: "https://www.javatpoint.com/physics",
        englishVideo: "https://www.youtube.com/watch?v=MHL3xn3m3ak&list=PLm_MSClsnwm-K6dR5w43Qcj8EzOW823A1",
        hindiVideo: "#",
        teluguVideo: "#",
        noteBook: "https://drive.google.com/file/d/1cDT6vGdtCoWHfU8JG1oy7l1vk5ZWIWuN/view?usp=share_link"
    },
    {
        id: 5,
        webLink: "#",
        englishVideo: "https://www.youtube.com/watch?v=gDzYDn9QCoU&list=PLm_MSClsnwm-PxgKwf3IRErhJdS89VP5X",
        hindiVideo: "https://www.youtube.com/watch?v=McOc6OUC7Pc&list=PLU6SqdYcYsfKqa52m3wyMZb1KVWuZsA2T",
        teluguVideo: "https://www.youtube.com/watch?v=rcC_dg9Z_ps&list=PLxvz2C0V1lebTL3bCQuo9HlJRhXhBL7l6",
        noteBook: "https://drive.google.com/file/d/1wuLcDMLDJ5Y_sII5eolzDcDUXwhFKsF7/view?usp=share_link"
    },
    {
        id: 6,
        webLink: "https://www.javatpoint.com/english-grammar",
        englishVideo: "https://www.youtube.com/watch?v=xVFMmyROOo4&list=PLzf4HHlsQFwIQUeZq_ykEVB6qZrTRnJZn&index=1",
        hindiVideo: "https://www.youtube.com/watch?v=xVFMmyROOo4&list=PLzf4HHlsQFwIQUeZq_ykEVB6qZrTRnJZn&index=1",
        teluguVideo: "https://www.youtube.com/watch?v=xVFMmyROOo4&list=PLzf4HHlsQFwIQUeZq_ykEVB6qZrTRnJZn&index=1",
        noteBook: "https://drive.google.com/file/d/129uLa2XgJW4DC7uwg1-XO93NjTE_wa50/view?usp=share_link"
    },
    {
        id: 7,
        webLink: "https://www.javatpoint.com/chemistry",
        englishVideo: "https://www.youtube.com/watch?v=3O6OfCaVadI&list=PLm_MSClsnwm9p_yaZ8zIW1LxkK7_n98gD",
        hindiVideo: "#",
        teluguVideo: "https://www.youtube.com/watch?v=G5iY2NSVwW4&list=PLNgoFk5SYUglfSgUdV3OcOXLSGrUtUIhb",
        noteBook: "https://drive.google.com/file/d/1JGCGR7SEkU8EibHTuLSswpMY80l2_T7F/view?usp=share_link"
    },
    {
        id: 8,
        webLink: "https://www.javatpoint.com/c-programming-language-tutorial",
        englishVideo: "https://www.youtube.com/watch?v=6VT8hDr2GhU&list=PLfVsf4Bjg79CZ5kHTiQHcm-l2q8j06ofd",
        hindiVideo: "https://www.youtube.com/watch?v=5UnPqRP236s&list=PLbGui_ZYuhigaBFJWrW6RNnJlhaqQRtK9",
        teluguVideo: "https://www.youtube.com/watch?v=DzZzpHQsILE&list=PLqWcha_6aXDvP3cXVqDT7LWVx67M-vO4G",
        noteBook: "https://drive.google.com/file/d/1QhtWrNVMO8n8zh9aO_mxkrjNW2mHQIUb/view?usp=share_link"
    },
    {
        id: 9,
        webLink: "https://www.javatpoint.com/data-structure-tutorial",
        englishVideo: "https://www.youtube.com/watch?v=AT14lCXuMKI&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU",
        hindiVideo: "https://www.youtube.com/watch?v=5_5oE5lgrhw&list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi",
        teluguVideo: "https://www.youtube.com/watch?v=pm_ugbO2FlY",
        noteBook: "https://drive.google.com/file/d/14GV8XzzoaJQ5XYRk9iSu6E-GizuKKIsI/view?usp=share_link"
    },
    {
        id: 10,
        webLink: "#",
        englishVideo: "https://www.youtube.com/watch?v=7jaa1rlW7Ak&list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS",
        hindiVideo: "https://www.youtube.com/watch?v=c4qlvjVuB4E&list=PL-IC1WV1OE4nNKpgl7t7Vc_wYtBWCZKpl",
        teluguVideo: "https://www.youtube.com/watch?v=FNCyr9NOhAI&list=PLXiBCNr6xnzqziPq9W-gKHO4PwcMwKwjr",
        noteBook: "https://drive.google.com/file/d/1ABQMm-PNSQk8VRdjjB1v07MOe1sEnCIh/view?usp=share_link"
    },
    {
        id: 11,
        webLink: "#",
        englishVideo: "https://www.youtube.com/watch?v=LKADevceuSo&list=PLG_pOUNcDW47LfvBVo0HEdUV3MnwKCnS6",
        hindiVideo: "https://www.youtube.com/watch?v=R-A57Et24pU&list=PLXOAU6CuWcaGUU3l8JrZhsBs6U1z-YX7s",
        teluguVideo: "https://www.youtube.com/watch?v=D13RUiq5tSA&list=PLmFuY5frTUrgATSYYcMZU2o4QvXDXENBz",
        noteBook: "#"
    },
    {
        id: 12,
        webLink: "https://www.javatpoint.com/computer-organization-and-architecture-tutorial",
        englishVideo: "https://www.youtube.com/watch?v=Ol8D69VKX2k&list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q",
        hindiVideo: "https://www.youtube.com/watch?v=Tc_762NIOl0&list=PLbGui_ZYuhigWLoEeaGUHvz1ynoqD6RtZ",
        teluguVideo: "https://www.youtube.com/watch?v=ARcxT_0gDeo&list=PLJSrGkRNEDAiSg4o5XRXkcuWSvclNzmtO",
        noteBook: "https://drive.google.com/file/d/1X9096FJD6l0yjJOogaA8G3T_H8yEtDr9/view?usp=share_link"
    },
    {
        id: 13,
        webLink: "#",
        englishVideo: "#",
        hindiVideo: "https://www.youtube.com/watch?v=zRnTNBgbgLw&list=PLh38vo46NPOvUXKSmDTYu9uNL5z4CXXGX",
        teluguVideo: "#",
        noteBook: "https://drive.google.com/file/d/1HxwbQ2A564WsC8m5t295RwCyZQrE4Pen/view?usp=share_link"
    },
    {
        id: 14,
        webLink: "#",
        englishVideo: "https://www.youtube.com/watch?v=F3vdNGFG0LI&list=PLG_pOUNcDW47N8PwD380xECTQtG3hTzJu",
        hindiVideo: "https://www.youtube.com/watch?v=8_KW9lnLY0c",
        teluguVideo: "https://www.youtube.com/watch?v=f8Xxdhu4baA&list=PLA1HLruLdexSKplfgrgnC5tuEOqrSq3KT",
        noteBook: "#"
    },
    {
        id: 15,
        webLink: "https://www.javatpoint.com/digital-electronics",
        englishVideo: "https://www.youtube.com/watch?v=M0mx8S05v60&list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm",
        hindiVideo: "https://www.youtube.com/watch?v=Tc_762NIOl0&list=PLbGui_ZYuhiilLuOs29220lxrhl3Ee7tO",
        teluguVideo: "https://www.youtube.com/watch?v=EDbJK1gVjRc&list=PLBwlAgfG_l1dktBeX482c8zuKfAYU-ZdI",
        noteBook: "https://drive.google.com/file/d/1nX3EFssG_fb8Zz010k2Mrwm3sy2dnMuV/view?usp=share_link"
    },
    {
        id: 16,
        webLink: "https://www.javatpoint.com/discrete-mathematics-tutorial",
        englishVideo: "#",
        hindiVideo: "#",
        teluguVideo: "#",
        noteBook: "https://drive.google.com/file/d/1iMBTFEXi-w_Xgo09nKkF8D_vgoat29BP/view?usp=share_link"
    },
    {
        id: 17,
        webLink: "https://www.javatpoint.com/daa-tutorial",
        englishVideo: "https://www.youtube.com/watch?v=nBRykKq80KY&list=PLYT7YDstBQmHr7eumHSrdo1aTMpqrpPDa",
        hindiVideo: "https://www.youtube.com/watch?v=u8JZ9gU5o4g&list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa",
        teluguVideo: "https://www.youtube.com/watch?v=eNdU3pxIvl4&list=PLBhIctyfOJgDDle-hm8542glhx6vbMWkt",
        noteBook: "https://drive.google.com/file/d/1r9Rm29VPcAFkvzsSBessy8DiUQKg2prI/view?usp=share_link"
    },
    {
        id: 18,
        webLink: "https://www.javatpoint.com/operating-system",
        englishVideo: "https://www.youtube.com/watch?v=aF2uRmibwco&list=PLrjkTql3jnm9U1tSPnPQWQGIGNkUwBFv-",
        hindiVideo: "https://www.youtube.com/watch?v=bkSWJJZNgf8&list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
        teluguVideo: "https://www.youtube.com/watch?v=HOUepU1Ylpw&list=PLJSrGkRNEDAh3p2kJm7LQhmztwGqGQbo6",
        noteBook: "https://drive.google.com/file/d/1zEt_5hrrEAjr9otg4v1rpN5mXZFC7lDL/view?usp=share_link"
    },
    {
        id: 19,
        webLink: "https://www.javatpoint.com/java-tutorial",
        englishVideo: "https://www.youtube.com/watch?v=r59xYe3Vyks&list=PLS1QulWo1RIbfTjQvTdj8Y6yyq4R7g-Al",
        hindiVideo: "https://www.youtube.com/watch?v=VAvsYDtBe78&list=PLbGui_ZYuhij8Oplrvjt_RlDliZQgdxoV",
        teluguVideo: "https://www.youtube.com/watch?v=7jZBmocOqjw&list=PLv_sM9ZH4RUX80_kQBVolY5te0JWF_V38",
        noteBook: "https://drive.google.com/file/d/1kaC5VqxiEn95Bj7y0DgXAMUbg7y1y5V9/view?usp=share_link"
    },
    {
        id: 20,
        webLink: "https://www.javatpoint.com/dbms-tutorial",
        englishVideo: "https://www.youtube.com/watch?v=wjfeGxqAQOY&list=PLrjkTql3jnm-CLxHftqLgkrZbM8fUt0vn",
        hindiVideo: "https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
        teluguVideo: "https://www.youtube.com/watch?v=0D30h9SpIHM&list=PL3KKfF5A0sSLnIMTfr7bBw_wRW2vCm3T6",
        noteBook: "https://drive.google.com/file/d/1fFJdom6HmS8zRs2j7sXEMhr3eKihQQ3u/view?usp=share_link"
    },
    {
        id: 21,
        webLink: "https://www.javatpoint.com/automata-tutorial",
        englishVideo: "https://www.youtube.com/watch?v=58N2N7zJGrQ&list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev",
        hindiVideo: "https://www.youtube.com/watch?v=XslI8h7cGDs&list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i",
        teluguVideo: "https://www.youtube.com/watch?v=ayoL_JkeVeY&list=PL6xbXi2C3sePDwyboAcu7l1UYuUT2SWYd",
        noteBook: "https://drive.google.com/file/d/1OoHLTZ1VxB-ud6hc7wkFGsSsZNVROstq/view?usp=share_link"
    },
    {
        id: 22,
        webLink: "https://www.w3schools.com/html/default.asp",
        englishVideo: "https://www.youtube.com/watch?v=HOA30z6pIL4&list=PLrk5tgtnMN6TNuhUEf5-UgPxa1wu-l6kP",
        hindiVideo: "https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg",
        teluguVideo: "https://www.youtube.com/watch?v=hSpEEmy7Wo",
        noteBook: "https://drive.google.com/file/d/13l0BxE0W4fA5OZ3ZjtMcATZP-R2cHY61/view?usp=share_link"
    },
    {
        id: 23,
        webLink: "https://www.javatpoint.com/net-framework",
        englishVideo: "#",
        hindiVideo: "#",
        teluguVideo: "#",
        noteBook: "https://drive.google.com/file/d/1iCB_8DGD8F2s5JBxZQJgMw9Jc90nBvDi/view?usp=share_link"
    },
    {
        id: 24,
        webLink: "https://www.tutorialspoint.com/signals_and_systems/index.htm",
        englishVideo: "https://www.youtube.com/watch?v=s8rsR_TStaA&list=PLBlnK6fEyqRhG6s3jYIU48CqsT5cyiDTO",
        hindiVideo: "https://www.youtube.com/watch?v=ftKIWPBMWKs&list=PL9RcWoqXmzaIG-RWneeqDJ-FCt66S15pl",
        teluguVideo: "#",
        noteBook: "https://drive.google.com/file/d/1J3hPWeusXRHt-b_FkJhnEl4kkpdH1XpI/view?usp=share_link"
    },
    {
        id: 25,
        webLink: "https://www.tutorialspoint.com/managerial_economics/index.html",
        englishVideo: "https://www.youtube.com/watch?v=0956eoTrbtc&list=PLROvODCYkEM__c0rQvYdenQcCHtY_nreR",
        hindiVideo: "#",
        teluguVideo: "https://www.youtube.com/watch?v=Ls-ZGJ5U9fQ&list=PLmAmHQ-_5ySxjnisAfFoOMBJswvKx2FNT",
        noteBook: "https://drive.google.com/file/d/1yna-g8L7AIIep4ioHTiEmBPzRX5XpQRM/view?usp=share_link"
    },
    {
        id: 26,
        webLink: "https://www.geeksforgeeks.org/introduction-of-compiler-design",
        englishVideo: "https://www.youtube.com/watch?v=KBulg_u-b3w&list=PLrjkTql3jnm-wW5XdvumCa1u9LjczipjA",
        hindiVideo: "https://www.youtube.com/watch?v=yNZIhF6pxjM&list=PL-JvKqQx2Ate5DWhppx-MUOtGNA4S3spT",
        teluguVideo: "https://www.youtube.com/watch?v=7VOSHNusQ-k&list=PL6xbXi2C3seOXoXK5nL92Frnk_gOT-_2b",
        noteBook: "https://drive.google.com/file/d/1G8h_nLXCU3_yfK49O2R-cnqfbeRglHWx/view?usp=share_link"
    },
    {
        id: 27,
        webLink: "https://www.geeksforgeeks.org/basics-computer-networking",
        englishVideo: "https://www.youtube.com/watch?v=PwFqQfyv0xM&list=PLrjkTql3jnm-iqlEOuVTkmCaRP8F2H3-u",
        hindiVideo: "https://www.youtube.com/watch?v=JFF2vJaN0Cw&list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_",
        teluguVideo: "https://www.youtube.com/watch?v=t3xnhP-gm-Q&list=PLEvM1oTwla97GrH04MOswhIRrPCHoyVwD",
        noteBook: "https://drive.google.com/file/d/1wraRZ-Cyj8lM5v3LYQvO_asX8QSCxwx8/view?usp=share_link"
    },
    {
        id: 28,
        webLink: "https://www.javatpoint.com/software-engineering",
        englishVideo: "https://www.youtube.com/watch?v=WxkP5KR_Emk&list=PLrjkTql3jnm9b5nr-ggx7Pt1G4UAHeFlJ",
        hindiVideo: "https://www.youtube.com/watch?v=uJpQlyT_CK4&list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2",
        teluguVideo: "https://www.youtube.com/watch?v=qxv6vPlx2Cs&list=PLmAmHQ-_5ySyCjVtHdSjJ64QU2x5TH8Dy",
        noteBook: "https://drive.google.com/file/d/1mfMrPUNbfaTUpFE2VaskwLMf1lLzt8fX/view?usp=share_link"
    },
    {
        id: 29,
        webLink: "https://www.javatpoint.com/artificial-intelligence-ai",
        englishVideo: "https://www.youtube.com/watch?v=kmeaG_BQZ7M&list=PLrjkTql3jnm_yol-ZK1QqPSn5YSg0NF9r",
        hindiVideo: "https://www.youtube.com/watch?v=FpvnF7_-tW8&list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe",
        teluguVideo: "https://www.youtube.com/watch?v=atMbjuiPYRg&list=PLv_sM9ZH4RUX3cTixZiSBlCVhG_L9rDzV",
        noteBook: "https://drive.google.com/file/d/1s4KOx3Bvy73oegS4TmXMtEFbauG-qXRS/view?usp=share_link"
    },
    {
        id: 30,
        webLink: "https://www.geeksforgeeks.org/android-tutorial",
        englishVideo: "https://www.youtube.com/watch?v=EknEIzswvC0&list=PLS1QulWo1RIbb1cYyzZpLFCKvdYV_yJ-E",
        hindiVideo: "https://www.youtube.com/watch?v=HyU4vkZ2NB8&list=PLjVLYmrlmjGdDps6HAwOOVoAtBPAgIOXL",
        teluguVideo: "https://www.youtube.com/watch?v=SO_41qUmf2o&list=PLeCpoxUq3EhmgHp7KI-Ih3X2PcNYRtC5y",
        noteBook: "https://drive.google.com/file/d/1MbcD2WyNfRsTu5UweslOvwVLj2ngBoRb/view?usp=share_link"
    },
    {
        id: 31,
        webLink: "https://www.javatpoint.com/microprocessor-tutorial",
        englishVideo: "https://www.youtube.com/watch?v=6R7JDkpG1Wk&list=PLrjkTql3jnm8HbdMwBYIMAd3UdstWChFH",
        hindiVideo: "https://www.youtube.com/watch?v=vDyHsjHC8h8&list=PL-JvKqQx2Ate6Ii3E0DMtkP9DwAB3NNWY",
        teluguVideo: "https://www.youtube.com/watch?v=aLAFn1rQsSw&list=PL0pCIUQIqHbWhACgZ4Gkg5_KB8Nj8ofL6",
        noteBook: "https://drive.google.com/file/d/1_AO5CZtq_tlHNP181SL7wmyqZf5R-LFQ/view?usp=share_link"
    },
    {
        id: 32,
        webLink: "https://www.tutorialspoint.com/cryptography/index.htm",
        englishVideo: "https://www.youtube.com/watch?v=JoeiLuFNBc4&list=PLBlnK6fEyqRgJU3EsOYDTW7m6SUmW6kII",
        hindiVideo: "https://www.youtube.com/watch?v=9X1rSWLFhLY&list=PL9FuOtXibFjV77w2eyil4Xzp8eooqsPp8",
        teluguVideo: "https://www.youtube.com/watch?v=lSAldhEC8Fs&list=PLmAmHQ-_5ySx_dXmOwSuGGGyE8XsbYT0n",
        noteBook: "https://drive.google.com/file/d/1FTJ_izYl8WMTDoC04qfKhpZSkXuVHlna/view?usp=share_link"
    },
    {
        id: 33,
        webLink: "https://www.javatpoint.com/machine-learning",
        englishVideo: "https://www.youtube.com/watch?v=gmvvaobm7eQ&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw",
        hindiVideo: "https://www.youtube.com/watch?v=xS0wLWi5NAs&list=PLuAADu3OvBt7-iBQ4qzW4W2Dn-bu-OWax",
        teluguVideo: "https://www.youtube.com/watch?v=mNB8NlwhAgg&list=PLmAmHQ-_5ySyQeEryrlomrEvOGNYN3TAL",
        noteBook: "https://drive.google.com/file/d/1CNegeqtFurwyZEEr8Ej9XjNyL9rMo5dg/view?usp=share_link"
    },
    {
        id: 34,
        webLink: "https://www.w3schools.com/python",
        englishVideo: "https://www.youtube.com/watch?v=41qgdwd3zAg&list=PLS1QulWo1RIaJECMeUT4LFwJ-ghgoSH6n",
        hindiVideo: "https://www.youtube.com/watch?v=URfNAAuZ52w&list=PLbGui_ZYuhigZkqrHbI_ZkPBrIr5Rsd5L",
        teluguVideo: "https://www.youtube.com/watch?v=qn0VbSFeTyY&list=PLLOxZwkBK52DmuHRO3UNpqAzDF57FtIxk",
        noteBook: "https://drive.google.com/file/d/18iH80bc-syTe3zksXGfpc8bHrfT10NXi/view?usp=share_link"
    },
    {
        id: 35,
        webLink: "https://www.javatpoint.com/uml",
        englishVideo: "https://www.youtube.com/watch?v=pg7vElU2dg8&list=PLDYV1XO7FpJXGxGztsM0v8FA0i02RT9pQ",
        hindiVideo: "https://www.youtube.com/watch?v=TGN48yc9aPU&list=PLhsqmA1RE0NEC15NCay3ObqcGaeHB_ebm",
        teluguVideo: "https://www.youtube.com/watch?v=N2x0h4nX0Qo&list=PLbBdOzdOUWiZa9URsY-FT5QSg40L2hEJR",
        noteBook: "https://drive.google.com/file/d/1Z3gJcsEDBItoOHQdhBKSkR-TZUmuc4OB/view?usp=share_link"
    },
    {
        id: 36,
        webLink: "https://www.javatpoint.com/cloud-computing",
        englishVideo: "https://www.youtube.com/watch?v=WxO3Hp9NUVU",
        hindiVideo: "https://www.youtube.com/watch?v=HhStJ7FDBpc&list=PLYwpaL_SFmcCyQH0n9GHfwviu6KeJ46BV",
        teluguVideo: "https://www.youtube.com/watch?v=xdUk_DU7xNM&list=PL35ft-0sAlPhkcplnefpnc7U4BzLTh_Uh",
        noteBook: "https://drive.google.com/file/d/1uyIW17X2-3X-wsBw5uAPCxzdmGb_MTPO/view?usp=share_link"
    },
    {
        id: 37,
        webLink: "https://www.geeksforgeeks.org/pattern-recognition-introduction/",
        englishVideo: "https://www.youtube.com/watch?v=mfePdDh9t6Q&list=PLbMVogVj5nJQJMLb2CYw9rry0d5s0TQRp",
        hindiVideo: "https://www.youtube.com/watch?v=n1LkQV10SnE&list=PLR5USSocuZ5f8w9deGEFWqeuq4yNqLzlb",
        teluguVideo: "#",
        noteBook: "https://drive.google.com/file/d/1r-CFi0Vbx0pyHWBJdns4zqEn4F036gJ6/view?usp=share_link"
    },
    {
        id: 38,
        webLink: "#",
        englishVideo: "https://www.youtube.com/watch?v=UhgedHMxvjw&list=PL3uLubnzL2TkQ5ZpBIpX34t0cpggGMuIF",
        hindiVideo: "https://www.youtube.com/watch?v=p6a3cNbabqU&list=PLuAADu3OvBt5W6nsg4WuI7cdqwo_I56UJ",
        teluguVideo: "https://www.youtube.com/watch?v=YzWQ1dRTWVs&list=PLXOYj6DUOGrrjyRKpD0U0bIKGOXCAOHkE",
        noteBook: "#"
    },
    {
        id: 39,
        webLink: "https://www.geeksforgeeks.org/what-is-data-science/",
        englishVideo: "https://www.youtube.com/watch?v=JL_grPUnXzY&list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV",
        hindiVideo: "https://www.youtube.com/watch?v=iipgQQ-4248&list=PLfP3JxW-T70HvifebGl3d5d5jzI1Kp0i8&index=2",
        teluguVideo: "https://www.youtube.com/watch?v=WKHlx--15_I",
        noteBook: "https://drive.google.com/file/d/1WArYEXH-8uDaT9fKO_ERF7SrXueyCzqn/view?usp=share_link"
    },
    {
        id: 40,
        webLink: "https://www.javatpoint.com/iot-internet-of-things",
        englishVideo: "https://www.youtube.com/watch?v=Ic63-yf-zuc&list=PL3uLubnzL2Tm5PAw88N1jR9MLTJpuPEnX",
        hindiVideo: "https://www.youtube.com/watch?v=LUWIFzOhkso&list=PLBV6VAQlom0n7iq_d1-uzIt3rBMyXj-kB",
        teluguVideo: "https://www.youtube.com/watch?v=X2EvPGp3qVE",
        noteBook: "https://drive.google.com/file/d/1C7KR8Qhq6K8b3cG2qGz7ri4Gk1x1QW5e/view?usp=share_link"
    },
    {
        id: 41,
        webLink: "#",
        englishVideo: "#",
        hindiVideo: "#",
        teluguVideo: "#",
        noteBook: "https://drive.google.com/file/d/1hcJLV4MMZ6AinyTfVTs-K1R_R4NXUZ_S/view?usp=share_link"
    }
];

let choosedCourse = localStorage.getItem('subjectcode');

if (choosedCourse == undefined || choosedCourse == null) {
    alert("Please, Choose the subject.");
    window.location.assign("category.html");
} else {
    choosedCourse = parseInt(choosedCourse, 10);
}

function webCheck() {
    const course = coursesData.find(c => c.id === choosedCourse);
    const link = course ? course.webLink : "#";

    if (link == null || link == undefined) {
        alert("Sorry, currently no Web-Playlist avaliable for the selected subject, will get added soon.(null)");
    } else if (link == "#") {
        alert("oops!!!,.. currently no Web-Playlist avaliable for the selected subject, will get upadated soon.#Till then try other resources.");
    } else {
        document.getElementById("playlist1").href = link;
        document.getElementById("playlist1").target = "_blank";
    }
}

function notebookcheck() {
    const course = coursesData.find(c => c.id === choosedCourse);
    const link = course ? course.noteBook : "#";

    if (link == null || link == undefined) {
        alert("Sorry, currently no NoteBook avaliable for the selected subject, will get added soon.(null)");
    } else if (link == "#") {
        alert("oops!!!,.. currently no NoteBook avaliable for the selected subject, will get upadated soon.#Till then try other resources.");
    } else {
        document.getElementById("playlist3").href = link;
        document.getElementById("playlist3").target = "_blank";
    }
}

function language(value) {
    if (value == "null") {
        document.getElementById("parachange").innerHTML = "You have choosed to learn " + localStorage.getItem("subject");
        delete localStorage.language;
        window.alert("Please, choose the language to get the video playlist.");
        document.getElementById('playlist2').href = "#";
        document.getElementById("playlist2").target = "_self";
    } else {
        localStorage.setItem('language', value);
        let lan = localStorage.getItem('language');
        const course = coursesData.find(c => c.id === choosedCourse);
        let link = "#";

        if (course) {
            if (lan == 'English') {
                link = course.englishVideo;
            } else if (lan == 'Hindi') {
                link = course.hindiVideo;
            } else if (lan == 'Telugu') {
                link = course.teluguVideo;
            }
        }

        if (link == null || link == undefined) {
            alert("Sorry, currently no Playlist avaliable for the selected language, will get added soon.(null)");
        } else if (link == "#") {
            alert("oops!!!,.. currently no Playlist avaliable for the selected language, will get upadated soon.#Till then try in other language.");
        } else {
            document.getElementById("parachange").innerHTML = "You have choosed to learn " + localStorage.getItem("subject") + " in language " + lan + ".";
            document.getElementById("playlist2").href = link;
            document.getElementById("playlist2").target = "_blank";
        }
    }
}
